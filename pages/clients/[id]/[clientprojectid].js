import { useRouter } from 'next/router';

function SelectedClientProPage() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div style={'background-color:blue'}>
            <h1>Specific Clients Projects are displayed here.</h1>
            <p ></p>
        </div>
    );
}

export default SelectedClientProPage;
