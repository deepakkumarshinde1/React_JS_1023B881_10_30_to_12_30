// HOC

export let commonMessages = (Component) => {
  let successMessage = (name) => {
    alert(`${name} successfully`);
  };

  let errorMessage = (message) => {
    alert(`${message} , fail try again`);
  };

  return (props) => {
    return (
      <Component {...props} success={successMessage} error={errorMessage} />
    );
  };
};
