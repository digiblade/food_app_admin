# Restaurant Management System Assessment

## Introduction

This assessment demonstrates the creation of a basic Restaurant Management System using React for the frontend, and mockapi.io for the backend API.

## Features

### 1. Display Restaurants

- **Route**: `http://localhost:3000`
- **Description**: Displays a list of all available restaurants.
- **UI Filtration**: Allows users to filter restaurants based on the following criteria:
  - **Name**: Search by the restaurant's name.
  - **Description**: Search by the restaurant's description.
  - **Delivery Mode**: Filter based on the delivery options available.
  - **Payment Type**: Filter based on the types of payments accepted.

### 2. Add Restaurant

- **Popup Form**: A popup form is provided to add a new restaurant.
- **Validation**: The form includes required field validation to ensure that all necessary information is provided.
- **Fields**: Includes fields for the restaurant's name, description, delivery mode, and payment type.

### 3. Edit Restaurant

- **Edit Form**: Allows users to edit the details of an existing restaurant.
- **Validation**: Similar to the add form, it includes validation for required fields.

### 4. Delete Restaurant

- **Delete Functionality**: Users can delete a restaurant from the list.

## Implementation Details

### Backend (mockapi.io)

- **API Endpoints**: 
  - **GET /restaurants**: Fetch all restaurants.
  - **POST /restaurants**: Add a new restaurant.
  - **PUT /restaurants/:id**: Edit an existing restaurant.
  - **DELETE /restaurants/:id**: Delete a restaurant.
- **Data Management**: Uses mockapi.io to simulate a backend API for handling restaurant data.

### Frontend (React)

- **UI Components**:
  - **RestaurantList**: Displays the list of restaurants with filters.
  - **AddRestaurant**: Popup form to add a new restaurant.
  - **EditRestaurant**: Popup form to edit an existing restaurant.
  - **DeleteRestaurant**: Functionality to delete a restaurant.
- **State Management**: State is managed using React's `useState` and `useEffect` hooks.
- **Validation**: Form validation is implemented to ensure required fields are filled out.

## Conclusion

The Restaurant Management System provides a basic yet functional interface for managing restaurant data. Users can view, add, edit, and delete restaurant information with ease, utilizing the filtering options to find specific restaurants based on various criteria. The use of React, mockapi.io ensures a robust and scalable application.

