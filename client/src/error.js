function Error({ errorText }) {
  return (
    <div className="alert alert-danger" role="alert">
      <p>Error: {errorText} </p>
    </div>
  );
}

export default Error;
