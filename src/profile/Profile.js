import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={styles.container}>
      {children}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button style={styles.button} onClick={() => handleName(fullName)}>Welcome</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Mohamed Firas Ben Othmen",
  bio: "No bio available",
  profession: "No profession available",
  handleName: (name) => alert(`Hello, my name is ${name}`),
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#23232f",
    padding: "25px 20px",
    color: "#676eff",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgb(40, 40, 40, 0.2)",
    margin: "20px",
  },
  button:{
    backgroundColor: "#72748e",
    border: "none",
    padding: "10px 90px",
    borderRadius: "100px",
    color: "#23232f",
    fontWeight: "700",
    cursor: "pointer",
  }

};

export default Profile;
