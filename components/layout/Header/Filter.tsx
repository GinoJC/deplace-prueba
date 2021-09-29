import React, { useState, useContext } from 'react';
import {
	FilterButton,
	ModalContainer,
	ModalContent,
	Selector,
	ButtonContainer,
	Button,
} from './styles';
import { Status, Gender } from 'interfaces/enums';
import { FilterCharacter } from 'interfaces/Character';
import { FilterContext } from 'context/filterContext';

const Filter: React.FC = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<FilterButton onClick={() => setShowModal(true)}></FilterButton>
			{showModal && <ModalFilter setShowModal={setShowModal} />}
		</div>
	);
};

export default Filter;

interface ModalProps {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFilter: React.FC<ModalProps> = ({ setShowModal }) => {
	const { filterCharacter, setFilterCharacter } = useContext(FilterContext);
	const [filters, setFilters] = useState<FilterCharacter>(filterCharacter);

	const statusOptions = Object.keys(Status);
	const genderOptions = Object.keys(Gender);

	const handleChange = (e) => {
		setFilters({
			...filters,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setFilterCharacter(filters);
		setShowModal(false);
	};

	return (
		<ModalContainer>
			<ModalContent onSubmit={onSubmit}>
				<span>Status</span>
				<Selector name="status" value={filters.status} onChange={handleChange}>
					<option value="">without filter</option>
					{statusOptions.map((element, index) => (
						<option key={index} value={element}>
							{element}
						</option>
					))}
				</Selector>
				<span>Gender</span>
				<Selector name="gender" value={filters.gender} onChange={handleChange}>
					<option value="">without filter</option>
					{genderOptions.map((element, index) => (
						<option key={index} value={element}>
							{element}
						</option>
					))}
				</Selector>
				<ButtonContainer>
					<Button onClick={() => setShowModal(false)}>Close</Button>
					<Button type="submit">Apply Filters</Button>
				</ButtonContainer>
			</ModalContent>
		</ModalContainer>
	);
};
