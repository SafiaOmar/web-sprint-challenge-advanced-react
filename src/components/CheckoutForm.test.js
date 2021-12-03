import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

const firstName = "Sofia";
const lastName = "Omar";
const address = "1111 Code St";
const city = "Columbus";
const state = "Ohio";
const zipCode = "43220";

test( "form header renders", () => {
	render( <CheckoutForm/> );

	expect( screen.getByText( /Checkout Form/i ) );
} );

test( "form shows success message on submit with form details", async () => {
	render( <CheckoutForm/> );

	const firstInput = screen.getByLabelText( /first/i );
	const lastInput = screen.getByLabelText( /last/i );
	const addressInput = screen.getByLabelText( /address/i );
	const cityInput = screen.getByLabelText( /city/i );
	const stateInput = screen.getByLabelText( /state/i );
	const zipInput = screen.getByLabelText( /zip/i );

	await userEvent.type( firstInput, firstName );
	await userEvent.type( lastInput, lastName );
	await userEvent.type( addressInput, address );
	await userEvent.type( cityInput, city );
	await userEvent.type( stateInput, state );
	await userEvent.type( zipInput, zipCode );
}