const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://yahnith:<password>@cluster0.w74vbvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
