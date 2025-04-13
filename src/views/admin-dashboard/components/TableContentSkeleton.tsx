import { TableCell, TableRow } from '@/components/ui/Table';
import React from 'react'

export const TableContentSkeleton = () => {

		return Array.from({ length: 5 }).map((_, rowIndex) => (
			<TableRow key={rowIndex}>
				{Array.from({length:3}).map((_,cellIndex) => (
					<TableCell key={cellIndex}>
						<div className="h-4 bg-muted rounded animate-pulse w-3/4 mx-auto" />
					</TableCell>
				))}
			</TableRow>
		));
	};
