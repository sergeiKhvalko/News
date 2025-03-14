import cn from "classnames";
import { FooterProps } from "./Footer.props";
import * as styles from "./Footer.module.scss";
import { AppImage } from "@/shared/ui/AppImage";
import LogoApi from "@/shared/assets/img/news-api.png";

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(styles.Footer, [className])}>
      <nav>
        <ul>
          <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Publishers</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </nav>

      <div className={styles.footerLogo}>
        <p>Powered by</p>
        <AppImage
          src={LogoApi}
          width={84}
          height={24}
        />
      </div>

      <p>© 2023 Besider, inspired by insider</p>
    </footer>
  );
};
