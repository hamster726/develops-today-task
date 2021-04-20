import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />

            <style jsx global>
                {`
                  html, body {
                    font-family: 'Roboto', sans-serif;
                    padding: 0;
                    margin: 0;
                  }

                  a {
                    color: inherit;
                    text-decoration: none;
                  }

                  * {
                    box-sizing: border-box;
                  }

                `}
            </style>

        </Provider>
    )
}

export default MyApp;
