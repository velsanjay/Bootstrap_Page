
export default function Button() {
    return (
        <div>
            <div className='bac'>
                <h1>Button</h1>
                <div className='top d '>
                    <div className="d1" >
                        <div className='mid'>
                            <h4>Circle Button</h4>
                            <hr></hr>
                            <p className='p'>
                                Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!
                            </p>
                            <p>.btn-circle</p>
                            <div>
                                <img className='top12' src="https://www.pngkit.com/png/detail/0-4506_facebook-logo-png-transparent-facebook-icon-small-png.png"></img>
                                <img className='top12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png"></img>
                                <img className='top12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqniAN9cEbSZcsDq6hMSvr0Ong8OQY1tmEBMt5_ZhmdS5KhrLKHMIf2JnWRXgVApA7FMvDCy79lA&usqp=CAU&ec=48600112"></img>
                                <img className='top12' src='https://img.freepik.com/free-vector/yellow-danger-warning-sign-vector-art-illustration_56104-872.jpg?w=360'></img>
                                <img className='top12' src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"></img>
                            </div>
                            <p>.btn-circle .btn-sm</p>
                            <div>
                                <img className='small' src="https://www.pngkit.com/png/detail/0-4506_facebook-logo-png-transparent-facebook-icon-small-png.png"></img>
                                <img className='small' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png"></img>
                                <img className='small' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqniAN9cEbSZcsDq6hMSvr0Ong8OQY1tmEBMt5_ZhmdS5KhrLKHMIf2JnWRXgVApA7FMvDCy79lA&usqp=CAU&ec=48600112"></img>
                                <img className='small' src='https://img.freepik.com/free-vector/yellow-danger-warning-sign-vector-art-illustration_56104-872.jpg?w=360'></img>
                                <img className='small' src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"></img>
                            </div>
                            <p>.btn-circle .btn-lg</p>
                            <div>
                                <img className='big' src="https://www.pngkit.com/png/detail/0-4506_facebook-logo-png-transparent-facebook-icon-small-png.png"></img>
                                <img className='big' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png"></img>
                                <img className='big' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqniAN9cEbSZcsDq6hMSvr0Ong8OQY1tmEBMt5_ZhmdS5KhrLKHMIf2JnWRXgVApA7FMvDCy79lA&usqp=CAU&ec=48600112"></img>
                                <img className='big' src='https://img.freepik.com/free-vector/yellow-danger-warning-sign-vector-art-illustration_56104-872.jpg?w=360'></img>
                                <img className='big' src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"></img>
                            </div>
                        </div>
                        <div className='mid'>
                            <h4>Brand Buttons</h4>
                            <hr></hr>
                            <p className='p'>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
                            <br></br>
                            <p className='p'>You can create more custom buttons by adding a new color variable in the <i>_variables.scss</i> file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the <i>_buttons.scss</i> file.</p>
                            <button className='dan bot'>
                                <img className='top12' src='https://i.pinimg.com/originals/5c/fd/f9/5cfdf9580e179b3d7df21e8d8adbe1ba.jpg'></img>
                                <p>.btn-google</p>

                            </button>
                            <button className='bot bo1'>
                                <img className='top12' src="https://www.pngkit.com/png/detail/0-4506_facebook-logo-png-transparent-facebook-icon-small-png.png"></img>
                                <p>.btn-facebook</p>

                            </button>
                        </div>
                    </div>
                    <div className='mid d1'>
                        <h4>Split Buttons with Icon</h4>
                        <hr></hr>
                        <p className='p'>Works with any button colors, just use the <i>.btn-icon-split</i> class and the markup in the examples below. The examples below also use the <i>.text-white-50</i> helper class on the icons for additional styling, but it is not required.</p>
                        <button className='mid1'>
                            <img src='https://fvmstatic.s3.amazonaws.com/maps/m/ICON-PIN-01-0004.png'></img>
                            <p>Split Button Primary</p>
                        </button>
                        <button className='mid1 gray'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png"></img>
                            <p>split Button Success</p>
                        </button>
                        <button className='mid1 gre'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqniAN9cEbSZcsDq6hMSvr0Ong8OQY1tmEBMt5_ZhmdS5KhrLKHMIf2JnWRXgVApA7FMvDCy79lA&usqp=CAU&ec=48600112"></img>
                            <p>split Button Info</p>
                        </button>
                        <button className='mid1 yel'>
                            <img src='https://img.freepik.com/free-vector/yellow-danger-warning-sign-vector-art-illustration_56104-872.jpg?w=360'></img>
                            <p>split Button Warning</p>
                        </button>
                        <button className='mid1 dan'>
                            <img src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"></img>
                            <p>split Button Danger</p>
                        </button>
                        <button className='mid1 sec'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_IeTOypGs_lOfqy-WDZTnLVPLLjbjSrDqNC9VyZVfA&usqp=CAU&ec=48600112'></img>
                            <p>split Button Secondary</p>
                        </button>
                        <button className='mid1 lit'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_IeTOypGs_lOfqy-WDZTnLVPLLjbjSrDqNC9VyZVfA&usqp=CAU&ec=48600112'></img>
                            <p>split Button Light</p>
                        </button>
                        <p className='p'>Also works with small and large button classes!</p>
                        <button className='mid1'>
                            <img className='sm' src='https://fvmstatic.s3.amazonaws.com/maps/m/ICON-PIN-01-0004.png'></img>
                            <p className='sma'>Split Button Small</p>
                        </button>
                        <button className='mid1  '>
                            <img className='big' src='https://fvmstatic.s3.amazonaws.com/maps/m/ICON-PIN-01-0004.png'></img>
                            <p className='s'>Split Button large</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default Button