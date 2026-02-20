import styles from '../styles/Home.module.css';
export function Home(){
    return(
        <div className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.title}>Bem-vindo à nossa Single Page Application</h1>
                <p className={styles.subtitle}>Este é um exemplo de renderização via componetes</p>
            </header >
           
            <section className={styles.features}>
                <div className={styles.card}>
                    <h3>Componetes</h3>
                    <p>Dividindo a interface em partes reultilizaveis.</p>   
                </div> 

                <div className={styles.card}>
                    <h3>CSS Modules</h3>
                    <p>Estilos que nao vazam para outras paginas</p>
                </div>
            </section>
        </div>

    );
}
//SPA é o uinico arquivo HTML que usa virtual DOM para troca de componetes.