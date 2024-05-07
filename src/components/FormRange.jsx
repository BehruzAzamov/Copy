import { formatPrice } from "../utils"
import { useState } from "react"

function FormRange({name}) {
    const step = 1000
    const maxPrice = 10000
    const [selectPrice, setSelectPrice] = useState(maxPrice)
    return (
        <div className="form-control">
            <label htmlFor={name}></label>
            <input type="select" />
        </div>
    )
}

export default FormRange