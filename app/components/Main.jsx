var React = require('react'),
    Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="grid-x">
        <div className="cell medium-6 large-4 small-centered">
            {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
