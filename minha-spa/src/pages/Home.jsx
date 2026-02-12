import styles from '../styles/Home.module.css';
export function Home(){
    return(
        <div className={styles.container}>
            <div>
                <h1>Bem-vindo à nossa Single Page Application</h1>
                <p>Este é um exemplo de renderização via componetes</p>
            </div>

            <div className={styles.content}>
                <p>Se você esta vendo isso, é porque funcionou</p>
            </div>
        </div>

    );
}
//SPA é o uinico arquivo HTML que usa virtual DOM para troca de componetes.