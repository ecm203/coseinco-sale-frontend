import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseLogin, uiIsLogin } from "../../redux-action/uiAction";
import GoogleLogin from "react-google-login";

import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Google } from "../../assets/icons/Google.svg";
import { ReactComponent as View } from "../../assets/icons/View.svg";
import { ReactComponent as ViewOff } from "../../assets/icons/View-off.svg";

const Login = () => {
    const { openLogin } = useSelector((state) => state.ui);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const handleCloseLogin = () => {
        dispatch(uiCloseLogin());
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    useEffect(() => {
        if (openLogin === true) {
            const checkScroll = () => {
                const scrollY = window.pageYOffset;
                if (scrollY >= 50) {
                    dispatch(uiCloseLogin());
                }
            };
            window.addEventListener("scroll", checkScroll);
            return () => {
                window.removeEventListener("scroll", checkScroll);
            };
        }
    }, [openLogin, dispatch]);

    useEffect(() => {
        if (openLogin === true) {
            document.getElementById("email").focus();
        }
    }, [openLogin]);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const responseGoogle = (response) => {
        dispatch(uiCloseLogin());
        localStorage.setItem('user', JSON.stringify(response.profileObj))
        setTimeout(() => {
            dispatch(uiIsLogin(true)); 
        }, 300);
    };

    return (
        <div className="login">
            <div className="login__content animation__content s-pxy-3">
                <h3 className="t--heading-3 s-mb-3">Iniciar sesión</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="s-mb-2">
                    <div className="input-group__box s-mb-2">
                        <input
                            id="email"
                            placeholder="Correo electrónico"
                            autoComplete="user"
                            className={`box__text ${
                                errors.email ? "box__text--error s-mb-05" : ""
                            }`}
                            type="text"
                            {...register("email", {
                                required: "Campo requerido",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email inválido",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="input-group__helper input-group__helper--error s-d-block s-left">
                                {errors.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="input-group__box s-mb-3">
                        {showPassword ? (
                            <button
                                type="button"
                                onClick={handleShowPassword}
                                className="box__btn box__btn--end"
                            >
                                <ViewOff className="box__icon" />
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleShowPassword}
                                className="box__btn box__btn--end"
                            >
                                <View className="box__icon" />
                            </button>
                        )}
                        <input
                            placeholder="Contraseña"
                            autoComplete="current-password"
                            className={`box__text box__text--icon-end ${
                                errors.password
                                    ? "box__text--error s-mb-05"
                                    : ""
                            }`}
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: "Campo requerido",
                            })}
                        />
                        {errors.password && (
                            <span className="input-group__helper input-group__helper--error s-d-block s-left">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className="login__feedback s-px-2 s-py-1 t--body-3 s-mb-3 s-d-none">
                        <span> Email o contraseña incorrectos </span>
                    </div>
                    <a
                        href="www.google.com"
                        className="s-d-inline-block s-mb-3"
                    >
                        ¿Olvidaste tu contraseña?
                    </a>
                    <button
                        type="submit"
                        className="btn btn--primary btn--full"
                    >
                        Inicia sesión
                    </button>
                </form>
                <div className="login__line s-mb-2"> ó </div>
                <div className="s-d-flex s-mb-3">
                    <button className="btn btn--fb btn--full">
                        <Facebook className="btn__icon btn__icon--start" />{" "}
                        Facebook
                    </button>
                    <GoogleLogin
                        clientId="754541191229-0n3t6sel54cqr0lc0m43kicl4fhu3ldk.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="btn btn--google btn--full"
                            >
                                <Google className="btn__icon btn__icon--start" />{" "}
                                Google
                            </button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>
                <div className="login__register s-d-flex s-main-center">
                    <p className="s-mr-05">No tienes cuenta</p>
                    <Link to="/Registro" className="t--link-2">
                        Registrate aquí
                    </Link>
                </div>
            </div>
            <div
                className="login__overlay animation__overlay"
                onClick={handleCloseLogin}
            ></div>
        </div>
    );
};

export default Login;
