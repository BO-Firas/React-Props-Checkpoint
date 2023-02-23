import Profile from "./profile/Profile";
import image from "./profile/image.jpg";

function App() {
  document.body.style.backgroundColor = "#17171f";
  return (
    <div>
      <Profile
        fullName="Mohamed Firas Ben Othmen"
        bio="I am a Full Stack Developer"
        profession="Full Stack Developer"
        handleName={(name) => alert(`Hello, my name is ${name}`)}
      >
        <img src={image} alt="profile pic" style={styles.image} />
      </Profile>
    </div>
  );
}

const styles = {
  image: {
    width: "220px",
    borderRadius: "5%",
    marginBottom: "20px",
  },
};


export default App;
