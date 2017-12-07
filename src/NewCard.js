import React from 'react';

class NewCard extends React.Component {
  state = { word: '', description: '', showError: false }

  hideError() {
    this.setState({showError: !this.state.showError});
  }

  render() {
    const errorMessage = this.state.showError ? 'Please fill in the word and description!' : '';
    return (
      <div>
        <div onClick={ () => {
            this.props.onShadowClick();
          }}
        >
        </div>
      <div >
        <h1>Create New Card</h1>
        <div>
          <input
            id='word'
            placeholder="Word i.e. 'React'"
            value = {this.state.word}
            onChange = {(e) => this.setState({word: e.target.value})}
          />
          <input
            id='description'
            placeholder="Description"
            value = {this.state.description}
            onChange = {(e) => this.setState({description: e.target.value})}
          />
            <br/>
            <button
              id='create-card__button'
              onClick={() => {

                if (this.state.word.length === 0 || this.state.description.length === 0) {
                  this.setState({showError: !this.state.showError});
                  setTimeout(() => this.hideError(), 2000);
                } else {
                  this.props.onShadowClick();
                  const word = ({word: this.state.word, description: this.state.description});
                  this.props.onNewCard(word);
                }
              }}
            >
                Create!
            </button>
            <div>
              {errorMessage}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCard;
