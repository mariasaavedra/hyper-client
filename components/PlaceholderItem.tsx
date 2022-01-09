import styles from "../styles/components/PlaceholderItem.module.scss";

interface PlaceholderItemProps {
  onClick: Function
}
// called admin/index.tx
export default function PlaceholderItem(props: PlaceholderItemProps) {
  const handleClick = () => {
    props.onClick();
  }
  return (
    <>
      <div 
        onClick={handleClick}
        className={
          styles.BookmarkComponent +
          " p-2 bg-white border-8 border-dashed border-black rounded-lg"
        }
        style={{
          height: "300px",
        }}
      >
        <div>
          <div className="text-black">
            <img style={{paddingTop: '20%'}} className="block mx-auto text-center" width="100px" src="/images/create.png"/>
          </div>
        </div>
      </div>
    </>
  );
}
