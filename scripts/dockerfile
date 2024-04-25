# Use an official Python 3.11.7 runtime as a parent image
FROM python:3.11.7

# Set the working directory in the container
WORKDIR /app

# Copy requirements file
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project directory into the container
COPY . .

# Run the training script from the scripts directory
RUN python scripts/training.py

# Expose port 10000 to the outside world
EXPOSE 10000

# Run app.py when the container launches
CMD ["gunicorn", "--worker-class", "gevent", "-b", "0.0.0.0:10000", "app:app"]