import React, { Component, PropTypes } from 'react'

export default class KeyBoard extends Component {
    constructor(props, context) {
        super(props, context)
    }

    handleKeyDown(e) {
        e.preventDefault();
        e = e || window.event;
        var charCode = e.keyCode || e.which;
        var charStr = String.fromCharCode(charCode);

        const { practice } = this.props

        if (charCode > 64 && charCode < 91 && !practice.completed) {
            document.getElementById(charCode).classList.toggle("pressed");
        }
    }

    handleKeyUp(e) {
        e.preventDefault();
        e = e || window.event;
        let charCode = e.keyCode || e.which;
        let charStr = String.fromCharCode(charCode);
        const { practice, incrementPractice, decrementPractice, errorPractice, completePractice, startTicker } = this.props

        if (practice.completed) {
            return;
        };
        
        if (practice.iterator == 0) {
            this.interval = setInterval(startTicker, 1000);
        };

        charStr = charStr.toLowerCase();
        if (e.shiftKey) {
            charStr = charStr.toUpperCase();            
        };
        
        if (charCode > 64 && charCode < 91) {
            document.getElementById(charCode).classList.toggle("pressed");
        }
        
        var $content = document.getElementById("write");
        if (charCode == 8 && practice.iterator > 0) {
            $content.removeChild($content.lastChild);
            decrementPractice(practice.id);
            return;
        }

        if (practice.text.length <= practice.iterator) {
            return;
        }

        if (charCode == 32) {
            var space = document.createTextNode(" ");
            $content.appendChild(space);
            incrementPractice(practice.id);
        }

        if (charCode > 64 && charCode < 91) {
            var char = document.createTextNode(charStr);
            var tmp;
            if(practice.text.charAt(practice.iterator) == charStr) {
                tmp = char;
            } else {
                errorPractice(practice.id);
                var $span = document.createElement("span");
                $span.style.color = "red";
                $span.appendChild(char);
                tmp = $span;
            }
            $content.appendChild(tmp);

            incrementPractice(practice.id);

            if (practice.text.length -1 == practice.iterator) {
                clearInterval(this.interval);
                completePractice(practice.id);
            }
        }
    }

    componentDidUpdate() {
        const { practice } = this.props

        if (practice.iterator == 0) {
            var $content = document.getElementById("write");
            if ($content) {
                while ($content.firstChild) {
                    $content.removeChild($content.firstChild);
                }
            };
        };
    }

    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this), false);
        document.addEventListener("keyup", this.handleKeyUp.bind(this), false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown.bind(this), false);   
        document.removeEventListener("keyup", this.handleKeyUp.bind(this), false);
    }    

    render() {
        const { practice, ticker } = this.props
        console.log('ticker ' + ticker);
        return (
        <div>
            <div className="practice">
                <div id="read">{practice.text}</div>
                <div id="write"></div>
                <div className="clear"></div>
            </div>
    		<div className="keyboard">
                <div className="row function">
                    <div id="key_accent" className="key"><div className="left top little">echap</div></div>
                    <div id="key_one" className="key"><span><strong>F1</strong></span></div>
                    <div id="key_two" className="key"><span><strong>F2</strong></span></div>
                    <div id="key_three" className="key"><span><strong>F3</strong></span></div>
                    <div id="key_four" className="key"><span><strong>F4</strong></span></div>
                    <div id="key_five" className="key"><span><strong>F5</strong></span></div>
                    <div id="key_six" className="key h-40"><p><strong>suppr</strong></p></div>
                    <div id="key_seven" className="key"><span><strong>F6</strong></span></div>
                    <div id="key_eight" className="key"><span><strong>F7</strong></span></div>
                    <div id="key_nine" className="key"><span><strong>F8</strong></span></div>
                    <div id="key_zero" className="key"><span><strong>F9</strong></span></div>
                    <div id="key_hyphen" className="key"><span><strong>F10</strong></span></div>
                    <div id="key_equals" className="key"><span><strong>F11</strong></span></div>
                    <div id="key_" className="key"><span><strong>F12</strong></span></div>
                    <div id="key_equals" className="key"><span><strong>num</strong></span></div>
                </div>
                <div className="row">
                    <div id="key_one" className="key"><div className="left top">#</div><div className="left bottom">$</div></div>
                    <div id="key_one" className="key"><div className="left top">1</div><div className="left bottom">"</div><div className="right bottom">_</div></div>
                    <div id="key_one" className="key"><div className="left top">2</div><div className="left bottom">«</div><div className="right bottom">&lt;</div></div>
                    <div id="key_one" className="key"><div className="left top">3</div><div className="left bottom">»</div><div className="right bottom">></div></div>
                    <div id="key_one" className="key"><div className="left top">4</div><div className="left bottom">(</div><div className="right bottom">[</div></div>
                    <div id="key_one" className="key"><div className="left top">5</div><div className="left bottom">)</div><div className="right bottom">]</div></div>
                    <div id="key_six" className="key mt-10 h-73"></div>
                    <div id="key_one" className="key"><div className="left top">6</div><div className="left bottom">@</div></div>
                    <div id="key_one" className="key"><div className="left top">7</div><div className="left bottom">+</div></div>
                    <div id="key_one" className="key"><div className="left top">8</div><div className="left bottom">-</div></div>
                    <div id="key_one" className="key"><div className="left top">9</div><div className="left bottom">/</div></div>
                    <div id="key_one" className="key"><div className="left top">0</div><div className="left bottom">*</div></div>
                    <div id="key_one" className="key"><div className="left top">°</div><div className="left bottom">=</div></div>
                    <div id="key_one" className="key"><div className="left top">'</div><div className="left bottom">%</div></div>
                    <div id="key_one" className="key"><strong></strong></div>
                </div>
                <div className="row">
                    <div id="key_tab" className="key"><div className="left top little">tab</div></div>
                    <div id="66" className="key"><div className="left top">B</div><div className="right bottom">|</div></div>
                    <div id="key_w" className="key single"><strong>É</strong></div>
                    <div id="80" className="key"><div className="left top">P</div><div className="right bottom">&</div></div>
                    <div id="79" className="key"><div className="left top">O</div><div className="right bottom">œ</div></div>
                    <div id="key_t" className="key single"><strong>È</strong></div>
                    <div id="key_y" className="key single mt-43 h-83"><strong></strong></div>
                    <div id="key_one" className="key"><div className="left top">!</div><div className="left bottom">^</div></div>
                    <div id="86" className="key single"><strong>V</strong></div>
                    <div id="68" className="key single"><strong>D</strong></div>
                    <div id="76" className="key single"><strong>L</strong></div>
                    <div id="74" className="key single"><strong>J</strong></div>
                    <div id="90" className="key single"><strong>Z</strong></div>
                    <div id="87" className="key single"><strong>W</strong></div>
                    <div id="key_right_bracket" className="key"></div>
                </div>
                <div className="row">
                    <div id="key_caps_lock" className="key single h-83" ><span className="left"><strong>caps lock</strong></span></div>
                    <div id="65" className="key"><div className="left top">A</div><div className="right bottom">ae</div></div>
                    <div id="85" className="key"><div className="left top">U</div><div className="right bottom">ù</div></div>
                    <div id="73" className="key"><div className="left top">I</div><div className="right bottom">"</div></div>
                    <div id="69" className="key"><div className="left top">E</div><div className="right bottom">€</div></div>
                    <div id="key_one" className="key"><div className="left top">;</div><div className="right bottom">,</div></div>
                    <div id="67" className="key single ml-43"><strong>C</strong></div>
                    <div id="84" className="key single"><strong>T</strong></div>
                    <div id="83" className="key single"><strong>S</strong></div>
                    <div id="82" className="key single"><strong>R</strong></div>
                    <div id="78" className="key single"><strong>N</strong></div>
                    <div id="77" className="key single"><strong>M</strong></div>
                    <div id="key_caps_lock" className="key single h-83"><span className="left"></span></div>
                    <div id="key_equals" className="key"><strong></strong></div>
                </div>
                <div className="row">
                    <div id="key_one" className="key ml-43"><div className="left top">À</div><div className="right bottom">\</div></div>
                    <div id="89" className="key"><div className="left top">Y</div><div className="right bottom">{'{'}</div></div>
                    <div id="88" className="key"><div className="left top">X</div><div className="right bottom">{'}'}</div></div>
                    <div id="key_x" className="key"><div className="left top">:</div><div className="left bottom">.</div><div className="right bottom">...</div></div>
                    <div id="75" className="key"><div className="left top">K</div><div className="right bottom">~</div></div>
                    <div id="key_x" className="key ml-43"><div className="left top">?</div><div className="left bottom">-</div></div>
                    <div id="81" className="key"><div className="left top">Q</div></div>
                    <div id="71" className="key"><div className="left top">G</div></div>
                    <div id="72" className="key"><div className="left top">H</div></div>
                    <div id="70" className="key"><div className="left top">F</div></div>
                    <div id="key_x" className="key"><div className="left top">Ç</div></div>
                    <div id="key_equals" className="key ml-43"><strong></strong></div>
                </div>
                <div className="row">
                    <div id="key_left_ctrl" className="key "><div className="left top little">ctrl</div></div>
                    <div id="key_left_alt" className="key "><span className="left"><strong>alt</strong></span></div>
                    <div id="key_left_cmd" className="key "><span className="left"><strong>cmd</strong></span></div>
                    <div id="key_right_ctrl" className="key "><span className="right"><strong>ctrl</strong></span></div>
                    <div id="key_space" className="key wide_5"> <div className="right bottom">_</div></div>
                    <div id="key_right_cmd" className="key "><span className="right"><strong>cmd</strong></span></div>
                    <div id="key_right_alt" className="key "><span className="right"><strong></strong></span></div>
                    <div id="key_right_ctrl" className="key "><span className="right"><strong></strong></span></div>
                    <div id="key_right_ctrl" className="key "><span className="right"><strong></strong></span></div>
                    <div id="key_equals" className="key h-83"><div className="left top little">ctrl</div></div>
                    <div id="key_right_ctrl" className="key "><span className="right"><strong></strong></span></div>
                </div>
                <div className="row">
                    <div id="key_left_ctrl" className="key"><div className="left top little">fn</div></div>
                    <div id="key_left_cmd" className="key wide_2"><div className="left top little">home</div></div>
                    <div id="key_left_cmd" className="key wide_2"><div className="left top little">alt</div></div>
                    <div id="key_right_cmd" className="key ml-216" ><div className="left top little">alt  gr</div></div>
                    <div id="key_right_alt" className="key"><div className="left top little"></div></div>
                    <div id="key_right_ctrl" className="key "><span className="right"><strong></strong></span></div>
                    <div id="key_right_ctrl" className="key "><span className="right"><strong></strong></span></div>
                    <div id="key_right_ctrl" className="key ml-43"><p><strong></strong></p></div>
                </div>
            </div>
        </div>
        )
  	}
}