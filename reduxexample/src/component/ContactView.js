export default function ContactView({contact, deleteContact}) {
    return <div>
        {contact.name}, {contact.email} <br />
        <button onClick={() => deleteContact(contact.email)}>Delete</button>
    </div>
}