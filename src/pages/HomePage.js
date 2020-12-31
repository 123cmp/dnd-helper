import './HomePage.css'
import React, {useState} from "react";
import CommonPage from "./CommonPage";

const defaultAdventure = {
    name: 'Adventure1',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla, tortor id pharetra
         vestibulum, quam dui congue eros, vel feugiat velit augue in mauris. Quisque rutrum urna et urna sollicitudin,
          non mollis tortor ultrices. In porttitor at sem id mollis. Sed at magna ante. Vivamus vulputate lectus nec
           tincidunt vestibulum. Nam molestie tristique velit in semper. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.
             Nunc ullamcorper aliquet erat eget malesuada. Vivamus in mollis lorem. Morbi sed mollis felis. Sed vitae
              erat tortor. Mauris ultricies lacus vitae orci lobortis, vitae facilisis sapien semper. Suspendisse quam
               nulla, vestibulum rutrum vehicula eget, imperdiet vitae risus. Nulla luctus leo sit amet mauris maximus
                malesuada. Mauris imperdiet erat nec justo pellentesque tempus.`,
    notes: 'qwe',
    id: '12323',
    images: [],
    places: []
};

export default function HomePage() {

    const [ isNotesEdit, setIsNotesEdit ] = useState(false)
    const [ isDescriptionEdit, setIsDescriptionEdit ] = useState(false)
    const [ adventure, setAdventure ] = useState(defaultAdventure)

    return <section className="home-page-wrapper">
        <CommonPage
            model={adventure}
            isDescriptionEdit={isDescriptionEdit}
            isNotesEdit={isNotesEdit}
            setIsNotesEdit={setIsNotesEdit}
            setIsDescriptionEdit={setIsDescriptionEdit}
            setModel={setAdventure}
        >
            something
        </CommonPage>
    </section>
}