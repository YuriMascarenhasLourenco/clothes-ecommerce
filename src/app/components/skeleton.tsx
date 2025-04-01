import clsx from "clsx";

export default function skeletonCard  ({isloading}:{isloading?:boolean}) {
return(
    <div className={clsx('flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300',{})}>
        <div>

        </div>
        <div></div>
        <div>

        </div>
    </div>
)
}