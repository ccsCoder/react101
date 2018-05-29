import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';   //Import without {} means import the Default export from the module, well this was new.



class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        };
    }
    handleClick(i) {
        //Immutability shit here
        const squares = this.state.squares.slice();//copy array
        squares[i] = 'X';
        this.setState({squares: squares});  //allows react to detect more easily when re-render is needed.

    }
    renderSquare(i) {
        //we couldn't act what happens on click since this state is priveate to Board,
        //and we cannot access it in Square, so we will pass a function here.
        // this becomes this.props.value in square (everything passed is colelcted in "Props")
        return <Square value={this.state.squares[i]} 
        onClick={()=> this.handleClick(i)} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
