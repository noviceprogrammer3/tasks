import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [user, setUser] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                checked={editMode}
                onChange={updateEditMode}
            />
            {!editMode && (
                <div>
                    {user} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
            {editMode && (
                <>
                    <Form.Group>
                        <Form.Control
                            placeholder="Enter your name"
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setUser(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="student"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                    <div>
                        {user} is {isStudent ? "" : "not"} a student
                    </div>
                </>
            )}
        </div>
    );
}
