import React from 'react';

export default class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workSeconds: 5,
            restSeconds: 5,
            displaySeconds: 5,
            nowResting: true,
            rounds:3,
            roundComplete: true,
            total:0,
            counting:false,
            finalTime:0
        };
        this.handleStartClick = this.handleStartClick.bind(this)
        this.handleChangeWorkSecs = this.handleChangeWorkSecs.bind(this)
        this.handleChangeRestSecs = this.handleChangeRestSecs.bind(this)
        this.handlePauseClick = this.handlePauseClick.bind(this)
        this.handleChangeRounds = this.handleChangeRounds.bind(this)
        this.decrement = this.decrement.bind(this)
        this.displayRestOrWork = this.displayRestOrWork.bind(this)
        this.interval = this.interval.bind(this)
        this.increaseTotal = this.increaseTotal.bind(this)
        this.decrementRound = this.decrementRound.bind(this)
        this.handleLogWorkout = this.handleLogWorkout.bind(this)
    }

    // runs the decrement function once every second
    interval() { 
        setInterval(this.decrement, 1000);
    }

    // increases total for final time at end of workout
    increaseTotal() {
        this.setState((state)=> {
            return {total:state.total+1}
        })
    }

    // checks if in rest or work mode, then sets displaySeconds to restSeconds or workSeconds
    displayRestOrWork() {
        if (this.state.nowResting) {
            this.setState((state)=> {return {displaySeconds:state.restSeconds}})
        } else {
            this.setState((state)=> {return {displaySeconds:state.workSeconds}})
        }
    }

    // toggles between work and rest mode, and then runs the decrement function once every second
    toggleNowResting() {
        this.setState((state)=> {return {nowResting: !state.nowResting}})
    }

    // toggles between round complete true or false and calls decrementRound to check if roundComplete is true and subtract a round from state.rounds
    toggleRoundComplete() {
        this.setState((state)=> {
            return {roundComplete:!state.roundComplete}
        })
        this.decrementRound()
    }

    // subtracts one round from state.rounds if roundComplete is true
    decrementRound() {
        if (this.state.roundComplete === true) {
            this.setState((state)=> {
                return {rounds:state.rounds-1}
            })
        }
    }

    // subtracts 1 from displaySecond and sets new displaySeconds state, if displaySeconds is 0 then clears interval and flips work/rest mode and then starts decrement again
    decrement() {
        this.increaseTotal();
        console.log('decrement')
        console.log(this.state)

        this.setState((state)=>{ return {displaySeconds: state.displaySeconds -1 }});

        if(this.state.displaySeconds==0) {
            clearInterval(this.intervalID);
            this.toggleNowResting();
            this.displayRestOrWork();
            this.toggleRoundComplete();
        }
        if (this.state.rounds==0){
            clearInterval(this.intervalID);
            console.log('WORKOUT COMPLETE')
        }
    }

    handleStartClick () {
        this.setState({counting:true});
        clearInterval(this.intervalID);
        this.displayRestOrWork();
        this.interval();
        console.log('handleStartClick');
    }

    handleChangeWorkSecs(e) {
        const workSeconds=e.target.value;
        this.setState({workSeconds:workSeconds });
    }
    handleChangeRestSecs(e) {
        const restSeconds=e.target.value;
        this.setState({restSeconds:restSeconds });
    }
    handleChangeRounds(e) {
        const rounds=e.target.value;
        this.setState({rounds:rounds})
    }
    handlePauseClick(e) {
        clearInterval(this.intervalID);
        this.setState({ nowResting: true });
    }
    handleLogWorkout() {

    }
    render() {
        const { displaySeconds, workSeconds, restSeconds, rounds} = this.state;

        // Mapping the date values to radius values
        const displaySecondsRadius = mapNumber(displaySeconds, 60, 0, 0, 360);

        return (
            <div>
                <h1>Countdown</h1>
                <div style={this.state.nowResting === true ? { backgroundColor: 'green'} : { backgroundColor: 'red'}}>

                    <label>Work Seconds<input value={workSeconds} onChange={this.handleChangeWorkSecs} type="text" /></label>
                    <label>Rest Seconds<input value={restSeconds} onChange={this.handleChangeRestSecs} type="text" /></label>
                    <label>Rounds<input value={rounds} onChange={this.handleChangeRounds} type="text" /></label>
                    <button onClick={this.handleStartClick} disabled={this.state.counting?true:false}>Start Workout</button>
                    <button onClick={this.handlePauseClick}>Pause Workout</button>
                    <button >Workout Complete</button>
                    <button onClick={this.handleLogWorkout}>Log Workout</button>

                    <div className="countdown-wrapper">

                        {workSeconds && (
                            <div className="countdown-item">
                                <SVGCircle radius={displaySecondsRadius}/>
                                {displaySeconds}
                                <span>seconds</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}







const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#333"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}