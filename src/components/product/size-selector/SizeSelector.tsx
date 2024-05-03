import type { Size } from "@/interfaces"
import clsx from "clsx"

interface Props {
    selectedSize?: Size
    availableSizes: Size[]

    onSizeChanged: ( size:Size ) => void
}

export const SizeSelector = ({ availableSizes,selectedSize,onSizeChanged }:Props) => {
  return (
    <div className="my-5">
        <h3 className="font-bold mb-4">Tallas disponibles</h3>
        <div className="flex">
          {
            availableSizes.map((size) => (
              <button
                onClick={ () => onSizeChanged( size ) }
                key={size}
                className={
                  clsx(
                    "mx-2 hover:underline",
                    {
                      'underline': size === selectedSize
                    }
                  )
                }
              >
                { size }
              </button>
            ))
          }
        </div>
    </div>
  )
}
