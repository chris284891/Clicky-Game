import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  gameoverDude = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      })
    }
    this.state.friends.forEach(friend => {
      friend.count = 0
    })
    this.setState({score: 0});
    return true;
  }

  clickCheck = id => {
    this.state.friends.find((o,i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameoverDude();
        }
      }
    })
  };

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>The Friends Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCheck={this.clickCheck}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
