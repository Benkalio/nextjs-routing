import { useRouter } from 'next/router';

function ClientProjectsPage() {
    const router = useRouter();

    function loadProjectHandler() {
        //LOAD DATA
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {
                id: 'max',
                clientprojectid: 'projecta'
            },
        });
    }

    return (
        <div>
            <h1>Selected Clients Project</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectsPage;
