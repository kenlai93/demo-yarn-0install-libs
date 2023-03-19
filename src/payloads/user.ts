export type Address = {
    recipient: string
    addressLine1: string
    addressLine2: string
    addressLine3: string
    mobile: string
}

export type User = {
    _id: string
    name: string
    email: string
}

export type GuestCustomer = {
    _id: string
    name: string
    email: string
}

export type Customer = {
    type: 'guest' | 'user',
    profile: User | GuestCustomer
}
