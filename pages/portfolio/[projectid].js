import { useRouter } from 'next/router';

function PortfolioProPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            <h1>Project Page</h1>
        </div>
    );
}

export default PortfolioProPage;
