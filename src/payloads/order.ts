import { OrderedProduct } from "./product"
import { Customer } from "./user"

export type Order = {
    _id: string
    orderDate: string
    orderedBy: Customer
    items: OrderedProduct
}
