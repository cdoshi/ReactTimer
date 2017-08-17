var React = require('react'),
    Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
            <Nav />
            <p>Main.JSX rendered</p>
            {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
