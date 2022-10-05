export const useLocation = () => {
	const location = ref(null)
	const fetchLocation = ref(false)
	const errorString = ref(null)


	const errorMessages = (error) => {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				errorString.value = "User denied request for location"
				break;
			case error.POSITION_UNAVAILABLE:
				errorString.value = "Location information is unavailable"
				break;
			case error.TIMEOUT:
				errorString.value = "The request to get user location timed out"
				break;
		}
	}
	
	const checkLocation = () => {
		if(!navigator.geolocation) {
			// error 
			errorString.value = "Geolocation is not available"
		} else {
			navigator.geolocation.getCurrentPosition()
		}
	}

	const getLocation = () => {
		try {
			fetchLocation.value = true 
		navigator.geolocation.getCurrentPosition((position) => {
			fetchLocation.value = false
			location.value = position

		})
		} catch(error) {
			fetchLocation.value = false
			// errorString.value = error.message
			errorMessages(error)
		}
		
	}

	return {
		location,
		fetchLocation,
		errorString,
		checkLocation,
		getLocation
	}
}