import { useRouter } from 'next/router';

function SelectedClientProPage() {
    const router = useRouter();
    router.query()
    return (
        <div>
            <h1>Specific Client's Projects are displayed here.</h1>
        </div>
    );
}

export default SelectedClientProPage;
