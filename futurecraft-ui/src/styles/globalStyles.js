import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Resetting default browser styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Setting up brand color palette */
  :root {
    --electric-blue: #007bff;
    --innovation-orange: #ffa500;
    --success-green: #28a745;
    --professional-grey: #343a40;
    --background-grey: #f4f4f4;
  }

  /* Setting up font family */
  body {
    font-family: 'Roboto', sans-serif;
    color: var(--professional-grey);
    background-color: var(--background-grey);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }

  /* Button styling */
  .btn-primary {
    background-color: var(--electric-blue);
    color: white;
    border-radius: 5px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--innovation-orange);
    }
  }

  .btn-secondary {
    background-color: transparent;
    color: var(--electric-blue);
    border: 2px solid var(--electric-blue);
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 123, 255, 0.1); /* Light tint of Electric Blue */
    }
  }

  /* Input styling */
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 2px solid var(--professional-grey);
    transition: border-color 0.3s ease;

    &:focus {
      border-color: var(--innovation-orange);
      outline: none;
    }
  }

  /* Accessibility */
  a, button {
    &:focus {
      outline: 3px solid var(--innovation-orange);
    }
  }
`;

export default GlobalStyle;
