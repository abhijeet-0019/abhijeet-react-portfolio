const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/abhijeet-0019">
        <i className="fa-brands fa-github" aria-hidden="true" title="Abhieet's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/abhijeet-singh-rajpurohit/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Abhijeet's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://leetcode.com/abhijeet0019/">
        <i className="fa-brands fa-hackerrank" aria-hidden="true" title="Abhijeet's Leetcode Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/abhi_na_ja">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Abhijeet's Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
