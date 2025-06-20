import { useParams } from "react-router-dom";

const ReadPage = () => {
  const { tno } = useParams();

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">
        Todo Read Page Component {tno}
      </div>
    </div>
  );
};

export default ReadPage;
