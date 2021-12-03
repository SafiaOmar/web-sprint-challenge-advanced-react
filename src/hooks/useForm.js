import { useState } from "react";

export const useForm = () => {
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		address: "",
		email: "",
		city: "",
		state: "",
		zip: "",
		notes: "",
	});

	const handleChanges = (input) => {
		setValues({ ...values, [input.target.name]: input.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setShowSuccessMessage(true);
	};

	return [showSuccessMessage, values, handleChanges, handleSubmit];
};
