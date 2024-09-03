import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";
import Button from "./Button";
function AlbumsListItem({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();
    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }
    const header = (<>
                        <Button className="mr-3" loading={results.isLoading} onClick = { handleRemoveAlbum }>
                            <GoTrashcan />
                        </Button>
                       {album.title}
                   </>);
    
            return <ExpandablePanel key={album.id} header={header}>
                        <PhotosList album={album} />
                    </ExpandablePanel>;
}

export default AlbumsListItem;