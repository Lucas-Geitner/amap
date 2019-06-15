import * as React from 'react';
import { isEmpty, length, equals, not } from 'ramda';
import { from } from 'rxjs';
import { map, filter, reduce, tap, pluck } from 'rxjs/operators';
import { Amap, Paysan } from '../../util/Props';

/**
 * Card of AMAP
 */
const Card: React.FunctionComponent<Amap> = ({
  title,
  description,
  image_secure_url,
  paysans = [],
}: Amap) => {
  const isPaysan = not(isEmpty(paysans));
  const paysanLenght = length(paysans);
  const isOnlyOnePaysan = equals(paysanLenght, 1);
  const pluralized = isOnlyOnePaysan ? '' : 's';

  let stringFood = '';

  from(paysans)
    .pipe(
      // tap(x => console.log(x)), // ?
      pluck('nourritures'),
      filter((u: Paysan | undefined) => u !== undefined),
      map((x: [string]) => x.join(', ')),
      reduce((u: string, acc: string) => acc + u),
      map((x: [string]) => (x.length > 60 ? `${x.slice(0, 30)}...` : x)),
      tap((s: string) => (stringFood = s))
    )
    .subscribe();

  return (
    <div className="mb-10 mt-10">
      <div className="">
        <img
          className="shadow-md rounded-lg w-full h-64 object-center object-cover"
          src={image_secure_url}
        />
        <div className="bg-white rounded-lg px-4 py-3 shadow-lg -mt-16 relative m-4">
          <span className="bg-teal-200 text-teal-800 font-medium uppercase tracking-wide text-xs leading-none px-1 inline-block rounded-lg">
            Active
          </span>
          <div className="ml-2 text-xs text-gray-600 inline-block">{stringFood}</div>
          <h4 className="mt-1 text-gray-900 font-semibold text-lg">{title}</h4>
          <p className="mt-1 text-gray-700 font-light text-sm">{description}</p>
          {isPaysan && (
            <p className="mt-3 text-gray-700 font-light text-xs">
              🚜 {paysanLenght} paysan{pluralized}{' '}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
