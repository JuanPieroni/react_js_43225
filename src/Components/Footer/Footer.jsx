import "./Footer.scss"

export const Footer = () => {
    return (
        <footer class="footer   ">
            <div class="footerTop ">
                <div class="footerGridItem">
                    <span>
                        <a href="../index.html">
                            <img
                                className="rounded-md overflow-hidden shadow-xl  sm:h-48   "
                                src={"../../../public/img/logo.png"}
                            />
                        </a>
                    </span>
                </div>
                <div class="footerGridItem">
                    <h2>CONTACTO</h2>
                    <p class="dire">yarucosmetica@gmail.com</p>
                    <p>Centro de Reciclaje:</p>
                    <p class="dire"> Amenabar 3240 - CABA</p>
                    <p class="dire">Rosario 4365 - Don Torcuato - Bs. As.</p>
                </div>
                <div class="footerGridItem">
                    <h2>SEGUINOS EN LAS REDES</h2>
                    <div class="redSocial">
                        <a
                            href="https://www.facebook.com/profile.php?id=100083271790950"
                            class="fa fa-facebook"
                            target="_blank"
                        ></a>
                        <a
                            href="https://www.instagram.com/yaru_cosmetica/"
                            class="fa fa-instagram"
                            target="_blank"
                        ></a>
                        <a
                            href="https://wa.me/5491161276562?text= Hola!! he visitado tu blog y me gustaria hacerte una consulta..."
                            class="fa fa-whatsapp"
                            target="_blank"
                        ></a>
                    </div>
                </div>
            </div>
            <div class="footerBottom">
                <small>
                    &copy; 2022 <b>Yaru Cosmetica</b> - Todos los Derechos
                    Reservados.
                </small>
            </div>
        </footer>
    )
}
