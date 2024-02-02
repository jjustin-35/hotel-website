import ReactLoading from 'react-loading';

function Loading({ isLoading }:boolean) {
    return (
        <>
            {isLoading && (
                <div className="loading">
                    <ReactLoading type='spin' color='#c9ac91' height={50} width={100} />
                </div>
            )}
        </>


    )
}
export default Loading