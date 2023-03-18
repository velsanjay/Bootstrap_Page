import { Route, Switch, useHistory } from "react-router-dom"
import { Animation } from "../component/Animation"
import { BorderData } from "../component/border"
import Button from "../component/Button"
import CardsData from "../component/Cards"
import ColorData from "../component/Colorsdata"
import { DashBoard } from "../component/DashBoard"
import { NavBar } from "../component/Nav"
import { PageNotFound } from "../component/PageNot"
import Top from "../component/Top"
import Register from "../component/Register"
import { LoginPage } from "../component/login"
import { ForgetPassWord } from "../component/Forget"
import { Blank } from "../component/Blank"

export function Base() {
    return (
        <div className="bas">
            <div className="bo1 na" style={{ color: "white" }}>
                <NavBar />
            </div>
            <div>
                <Top />
                <Switch>
                    <Route exact path="/">
                        <DashBoard/>
                    </Route>

                    <Route path="/login">
                        <LoginPage/>
                    </Route>

                    <Route path="/forget">
                        <ForgetPassWord/>
                    </Route>

                    <Route path="/animation">
                        <Animation/>
                    </Route>

                    <Route path="/border">
                        <BorderData/>
                    </Route>

                    <Route path="/cards">
                        <CardsData />
                    </Route>

                    <Route path="/button">
                        <Button />
                    </Route>

                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/color">
                        <ColorData/>
                    </Route>

                    <Route path="/blank">
                        <Blank/>
                    </Route>

                    <Route path="**">
                        <PageNotFound/> 
                    </Route>
                </Switch>
            </div>
        </div>
    )
}