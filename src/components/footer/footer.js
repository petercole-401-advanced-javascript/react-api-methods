import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          <small>&copy; Cole
          <script language="JavaScript" type="text/javascript">
              document.write((new Date).getFullYear())
          </script>
          </small>
        </p>
      </footer>
    );
  }
}

export default Footer;
