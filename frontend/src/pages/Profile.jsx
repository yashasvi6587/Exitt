import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';
import '../Styles/Profile.css';

const Profile = () => {
    const { token, backendUrl } = useContext(ShopContext);

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        bikeType: ''
    });

    // Fetch current profile
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                });

                if (response.data.success) {
                    const user = response.data.user;
                    setProfile({
                        name: user.name || '',
                        email: user.email || '',
                        phone: user.phone || '',
                        gender: user.gender || '',
                        dob: user.dob || '',
                        bikeType: user.bikeType || ''
                    });
                }

                else {
                    toast.error(response.data.message || 'Failed to load profile');
                }
            } catch (error) {
                console.error(error);
                toast.error('Error fetching profile');
            }
        };
        fetchProfile();
    }, [token, backendUrl]);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { name, phone, gender, dob, bikeType } = profile;
            const response = await axios.put(`${backendUrl}/api/user/profile`, {
                name,
                phone,
                gender,
                dob,
                bikeType,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.success) {
                toast.success("Profile updated successfully!");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Update failed");
        }
    };

    return (
        <div className="profile-container">
            <form className="profile-form" onSubmit={handleUpdate}>
                <h2>My Profile</h2>
                <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Full Name" required />
                <input type="email" value={profile.email} disabled />
                <input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" />
                <input type="text" name="gender" value={profile.gender} onChange={handleChange} placeholder="Gender" />
                <input type="date" name="dob" value={profile.dob} onChange={handleChange} placeholder="Date of Birth" />
                <input type="text" name="bikeType" value={profile.bikeType} onChange={handleChange} placeholder="Bike Type (e.g. Road, MTB)" />
                <button type="submit" className="update-btn">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
