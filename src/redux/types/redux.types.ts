export interface ErrorResponse {
	data: {
		detail: string,
		error: number
	}
}
export interface ErrorReceived {
	response: ErrorResponse,
}