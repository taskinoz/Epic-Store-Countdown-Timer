import React from 'react';

export class GameContainer extends React.Component {
  render() {
    return (
      <section>
        <div className="game-image">
          <img src={this.props.image} />
        </div>
        <div className="game-info">
          <h2>{this.props.name}</h2>
        </div>
      </section>
    )
  }
}
