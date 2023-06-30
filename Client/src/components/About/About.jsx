import React from "react";
import styles from './About.module.css'



export default function About() {
    return (
        <div className={styles.contenedorAbout}>
            <h1 className={styles.titulo}>About</h1>
            <div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 400"><path d="M184.75335693359375,304.9327392578125C198.0657650756836,297.07623901367185,217.42002573649089,295.5605517578125,239.46188354492188,272.645751953125C261.50374135335284,249.7309521484375,278.8281133524577,234.5500746154785,275.3363342285156,210.7623291015625C271.84455510457354,186.9745835876465,246.71748942057292,172.70553126017253,225.1121063232422,174.8878936767578C203.50672322591146,177.0702560933431,167.56054265340168,193.5426039123535,186.54708862304688,219.73094177246094C205.53363459269207,245.91927963256836,259.49177408854166,277.05529576619466,303.1390075683594,282.5111999511719C346.7862410481771,287.9671041361491,348.24214803059897,267.24962432861327,365.9192810058594,242.1524658203125C383.5964139811198,217.05530731201173,377.96711822509764,205.12405924479165,375.7847595214844,179.3721923828125C373.6024008178711,153.62032552083335,356.95068359375,157.9282553609212,356.95068359375,136.3228759765625C356.95068359375,114.71749659220377,357.6711592610677,105.64125974019369,375.7847595214844,90.58296203613281C393.89835978190104,75.52466433207194,417.859494934082,78.36771273295085,431.39013671875,74.43946075439453" fill="none" stroke-width="14" stroke="url(&quot;#SvgjsLinearGradient1001&quot;)" stroke-linecap="round" stroke-dasharray="0 0" stroke-opacity="0.41"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg> */}
            </div>
            <h2 className={styles.description}>¡Hola! Mi nombre es Victoria, este es mi primer proyecto utilizando tecnologias web,
             las cuales son React, Redux, Express, Sequalize y PostgreSQL. El principal desafio que me encontré al realizar este proyecto
             fue no solo cumplir con los requisitos funcionales sino también quise dejar mi impronta a nivel visual, para lo cual como primer instancia
            realicé bosquejos en papel que luego modelé en Canva para finalmemte implementarlos como componentes en React. 
            </h2>
            <div className={styles.iconContenedor}>
                <div> 
                    <a href="https://www.linkedin.com/in/victoriabelenrodriguez/">
                    <img className={styles.linkedin} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVR4nO1ZTUsCQRie6NA1OgVdq2u/oFO3Sjp2zTZxp4LoUoegSwh1iG79gH5A5y6m5DdSobNaQhREIB7S/OzLfGN2Uix3WVdjP2AeeBHnHWafZ96PWUeEODg4OKyN1dQCEiU/EqUKwhIYYqL8LB/CxNEfeUz2DSONVc3T+86bTx5YRMi8fgE0bcwmjlspdd6DAFI2nThuGinpF6C2mDsBSIgCcobYJ/1uhAjdUCE/uR2Di9sCVN7qEMgUYGIrZowI3VBaRIjKpNvhvymwSNhCgDMk73w7yq91lk62ECDYPQJuVgNUBI2EL52HcVvVALZ7F1qOAHIGO42Oa/nFJCBXHJDQnNPcgCva5w0SsBQAJdBxLf/YZhSOzh4h9VSB148veKl+yqm4fpKBIVdEO5JmCpjaiUGu+A5quHwowehGlEXJigLucjXQgi+dhwEhbE0B3WL2MKmeSmYK+Go05PyfOUjA4nEKvKm84ryTYJYVutUE7J7eA1qJsxx3J2BwJQJnyeeOeZlslXUpqwkYWQv/bpXuBEx7rjvmFWuf6q8lZgloNNr8LSMwvBpRnkvPCCsJkP1KpLTWwlyAxCPQBE8hzItY4l0I8Tb6L7/Iwuyg+Wt0vBu/nrVwvweZla4WRVLUL0C+n7cAeSy/O3l7EEAc5hOXfiw5p18Ai4LHfPLSHuoL9M8Fej9vZE2I9FnE2/vOc3BwcCCD8A17+xr1hLAa7wAAAABJRU5ErkJggg==" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Vickyrdz">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFb0lEQVR4nO2ZbWhWZRjHj27plnM4nZYlpTaTFWo07EtBCAZaNgtr5Ycg08ygQCJKM6hMQsJWTss0Q0gqqGRir9jLh4paa4uCXijNMiTLPStdmrZZv7i2/8F7p/P2PM9ZBfWHw7Nz3fd93f9zv1xv87z/4XnAWGASUKffsf+qdQGGAvXAWqAdOEw4DgNtwCPA5TbunyB7FvAo8JNDrAfYBbwEPAts1O/Lklu7Dxu3Hpj4d5AdDTzpEMhp8llARcLYCuBS4DGg0/nQJ4DqgSJ8rTOZrdxCYEgRx2oRsFv6TG9DlmRLtTqGX4FlhZINwvQAK4Cj0m+7VuoVA6Ac2CGFXwBTilIYAWAa8KXm2Q6UeYUAKAG2SVELMKogRennGwG8rfleLGjFnSNhisod+SnA4IyIlgBjnPeTgXf8o1LIpfOPxAhHfqdz69v1Pjww9iTgdGAqcJq9e/3bq4GVwKfA79J3vdNe5RyVhnzMWqcu3ZTA+f5FhA84Nnc/sESOwz4yDJ8Ba4ClwEFH/r2jo8SZa6ouZy6VOZQdNiwLyGskf1Xvk4F1wPGA52vR5d2i3w+AI06fY8ADwJnS0yr5+MB8ZlUMm9J4Ot+z9TNrwHlSsjkgvwDYAMyOuvX07VK9vGRtoO156Z0cYsu/BrqBCXGkzTUbFoa0jVPbDi9DcOLiDQ9pu1Ft66IGD1VMkAtzHmYxgEP29RkSHqw598Zw6ozi5Gn7Yk0N8L76jMuIdF3S7unoGS4La7Tw0jArYvB04A/go6AZK4L0MGAP8FtUxGdkxasxrLFdlzA0WgOe1uAZWRD2AcyX3jVeCOysy0K1BhsGyVx9FeO5DkadvQyCpiPmbGL6WDTYZTxd4an62lciBk1Q+7asSRuAT8yZeBEAXtP8Y1zh2RI+EzHoHLVv9QaOdHdMu2VAhklhjuNNYAFwm+KK24HFTsyxc4BIH1CIsNh5bgFuBa4TL8O0sJU2T7gaWCWiS/XY3z/KTpdlTLjWiU9WaC577hKXRifD6bfSFm4a3tBRmCuy9ykQ2uIENzdkTHqt9FqwtVkk79X89eJjvAyjg9bDj+DesiBFaZVt09VKXOfolnf4wU4GhC+WOTNbPUOJb4NzJDeJT89frIcUtCm+HRkziX29Ya/dgyIJz9FCGemZMf1GiVdrWKMdA8PcgLzK/ULgfvXrUWhamwfRQcCFThpnOuYnjLlSfR8Ka7TKj2GDI1su2W7XvSuz+YET+Fhh503AFdpqiytmAvO0Q08p1PTxOXBRig+1I2KYHRdRmecbJpmtpA/bogWBfO5m4N1AIhCHY+bAgGvcTCWhwNMVGeWpk9UdDIscF2tlLpztvCpk3EhnFW0HmoHngBcc+f58K0naOUNTXKeJIvadn4GrCuqnS916tsqGrpbJssgPha4VIcWe5uDRS0HYdnKf5huf1Nlqa4a7HZmdV0TQzmIYfo5aSfrSrX1akDNSkr4n9Ycqxc/p/NVJdq5i6V3aDbtkl+ii+R+5KkHvcvW7IwWH6YqxO1IXiWTgfavRW/cAHpTsuFa7TY9fTqhLUfoyNCf0q5KzIez+JBFf75zT3qTTiioqEbglAR/lCfrK1K8lpk+lSg7xly9GQamKgShjDt0mrTYpdRraYo7le709+i5uokmMWx2f+J4w150FaeB84FuHcHGRpFbcPypHFYGVZ0GaPquy0qlPNxW8wjGXM+es+hJl03mTpm+cedNvJOvI+9LlQbxasYAZfFRoscTAUJkwtlL9DsmmIz2PD3Tt2010m5z/wSA7bjuwUy58o35fl9zafeTkqOI93QCRH6LA/WHgQwU3YehSdbRRhcpM/meTGZS61chr1vRL+73/MP4EOSCNA/ULOfAAAAAASUVORK5CYII=" />
                    </a>
                    
                </div>
            </div>

        </div>
    )
    
}