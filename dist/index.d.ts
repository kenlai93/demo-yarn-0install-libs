// Generated by dts-bundle-generator v7.2.0

export type Product = {
	_id: string;
	name: string;
	desc: string;
	image: string;
};
export type OrderedProduct = {
	name: string;
	desc: string;
	image: string;
};
export type Address = {
	recipient: string;
	addressLine1: string;
	addressLine2: string;
	addressLine3: string;
	mobile: string;
};
export type User = {
	_id: string;
	name: string;
	email: string;
};
export type GuestCustomer = {
	_id: string;
	name: string;
	email: string;
};
export type Customer = {
	type: "guest" | "user";
	profile: User | GuestCustomer;
};
export type Order = {
	_id: string;
	orderDate: string;
	orderedBy: Customer;
	items: OrderedProduct;
};
export declare function sum(arr: number[]): number;
export declare function average(arr: number[]): number;

export {};
