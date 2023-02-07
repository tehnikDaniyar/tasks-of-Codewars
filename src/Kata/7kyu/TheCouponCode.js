



//============The Coupon Code=======================
/*Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	return (enteredCode === correctCode) &&
		convertDate(expirationDate) >= convertDate(currentDate);
}

function convertDate(date) {
	return new Date(date.split(' ').reverse().join(' '))
};



